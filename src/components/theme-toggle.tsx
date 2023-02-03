import * as ToggleGroup from '@radix-ui/react-toggle-group';
import clsx from 'clsx';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import Tooltip from '@/components/tooltip';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState(theme);

  const setResolvedTheme = (resolvedTheme: string) => {
    setTheme(resolvedTheme);
    setThemeValue(resolvedTheme);
  };

  const themes: { themeName: string; icon: ReactElement }[] = [
    { themeName: 'system', icon: <Monitor size={15} /> },
    { themeName: 'dark', icon: <Moon size={15} /> },
    { themeName: 'light', icon: <Sun size={15} /> },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup.Root
      type='single'
      value={themeValue}
      onValueChange={(themeValue) => {
        if (themeValue) setResolvedTheme(themeValue);
      }}
      className='max-w-fit rounded-md shadow-md'
    >
      {themes.map(({ themeName, icon }) => (
        <Tooltip
          key={themeName}
          content={themeName[0]?.toUpperCase() + themeName.substring(1)}
        >
          <ToggleGroup.Item
            value={themeName}
            disabled={themeName === themeValue}
            className={clsx(
              'group px-2 py-1.5',
              'border-y border-gray-7 bg-gray-4 first:rounded-l-md first:border-x last:rounded-r-md last:border-x',
              'hover:bg-gray-5 focus:relative motion-safe:duration-300 motion-safe:ease-productive-standard',
              'rdx-disabled:bg-gray-6'
            )}
          >
            <div
              className={clsx(
                'flex items-center gap-1 font-medium opacity-60',
                'group-rdx-disabled:opacity-100 motion-safe:group-rdx-disabled:animate-scale-fade'
              )}
            >
              {icon}
            </div>
          </ToggleGroup.Item>
        </Tooltip>
      ))}
    </ToggleGroup.Root>
  );
};

export default ThemeToggle;
