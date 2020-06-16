const path = require('path')
const fs = require('fs').promises
const glob = require('glob')

const packagePath = process.cwd()
const relative = (sourcePath) => path.relative(path.resolve(process.cwd(), '../../'), sourcePath)
const buildPath = path.join(packagePath, './build')
const srcPath = path.join(packagePath, './src')

async function exists(sourcePath) {
  return await fs.stat(sourcePath)
}

async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/**/index.ts', { cwd: from }).map(path.dirname)

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
        main: './index.js',
        module: './index.esm.js',
        typings: './index.d.ts',
      }
      const packageJsonPath = path.join(to, directoryPackage, 'package.json')
      await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))
      console.log(`Create ${relative(packageJsonPath)}`)

      return packageJsonPath
    })
  )
}

async function copyOtherFile(files) {
  await Promise.all(
    files.map(async (file) => {
      const sourcePath = path.resolve(packagePath, file)
      const targetPath = path.resolve(buildPath, file)
    
      if (!(await exists(sourcePath))) return
    
      await fs.copyFile(sourcePath, targetPath)
      console.log(`Copied ${relative(sourcePath)} to ${relative(targetPath)}`)
    })
  )
}

async function copyPackageFile() {
  const referecePath = path.resolve(packagePath, 'package.json')
  const targetPath = path.resolve(buildPath, 'package.json')

  await fs.copyFile(referecePath, targetPath)
  console.log(`Copied package.json in ${relative(targetPath)}`)
}

async function run() {
  try {
    if (!(await exists(buildPath))) {
      console.warn(`Build dir ${buildPath} does not exists`)
    }
    await copyPackageFile()
    await copyOtherFile(['README.md','CHANGELOG.md'])

    await createModulePackages({ from: srcPath, to: buildPath })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

run()