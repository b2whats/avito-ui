//@ts-nocheck
import React from 'react'
import { css, markerId } from '@avito/core'
import { Text, Stack, ListItem, Checkmark } from '../../'
import { CrossIcon } from '../Icon'

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
  marker,
}) {
  return (
    <div css={styles.root}>
      <div css={styles.header}>
        <span css={styles.close}>
          <CrossIcon size='l' onClick={onCancel} marker={`${marker}/close`} />
        </span>
        <Text bold>{title}</Text>
      </div>
      <Stack column>
        {items.map(item => (
          <ListItem
            key={item[keyProperty]}
            label={item[displayProperty]}
            after={<Checkmark checked={selectedKey === item[keyProperty]} />}
            onClick={() => onConfirm(item[keyProperty])}
            marker={markerId(marker, 'item', item[keyProperty])}
          />
        ))}
      </Stack>
    </div>
  )
}
