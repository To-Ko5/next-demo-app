'use client'

import React from 'react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'

const ThemeSwitching = () => {
  const { setTheme } = useTheme()
  const onChangeTheme = (e: boolean) => {
    if (e) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return <Switch onCheckedChange={onChangeTheme} />
}

export default ThemeSwitching
