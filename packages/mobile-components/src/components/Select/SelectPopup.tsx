//@ts-nocheck
import React from 'react'
import { Icon, Text, Stack, ListItem, Checkbox } from '../../'
import { css, keyframes } from '@avito/core/styled-system/'

const styles = {
  root: css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 99999;
  `,
  header: css`
    text-align: center;
    position: relative;
    padding: 16px;
  `,
  close: css`
    position: absolute;
    top: 14px;
    left: 11px;
  `,
}

export function SelectPopup({
  items,
  title,
  keyProperty,
  displayProperty,
  selectedKey,
  onCancel,
  onConfirm,
}) {
  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <span css={styles.close}>
          <Icon name='close' size='l' onClick={onCancel} />
        </span>
        <Text bold>{title}</Text>
      </div>
      <Stack column>
        {items.map(item => (
          <ListItem
            key={item[keyProperty]}
            label={item[displayProperty]}
            after={<Checkbox shape='circle' checked={selectedKey === item[keyProperty]} />}
            onClick={() => onConfirm(item[keyProperty])}
          />
        ))}
      </Stack>
    </div>
  )
}