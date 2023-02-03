import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { MoreVertical } from 'lucide-react';

import ThemeToggle from '@/components/theme-toggle';
import Tooltip from '@/components/tooltip';

const ThemePopover = () => {
  return (
    <Popover.Root modal>
      <Tooltip content='more'>
        <Popover.Trigger
          aria-label='show more'
          className='text-gray-11 hover:text-gray-12 hover:opacity-80 motion-safe:duration-300 motion-safe:ease-productive-standard'
        >
          <MoreVertical size={18} />
        </Popover.Trigger>
      </Tooltip>
      <Popover.Portal>
        <Popover.Content
          onCloseAutoFocus={(e) => e.preventDefault()}
          sideOffset={6}
          className={clsx(
            'z-30',
            'motion-safe:rdx-side-bottom:animate-slide-down-fade motion-safe:rdx-side-top:animate-slide-up-fade',
            'motion-safe:rdx-side-left:animate-slide-left-fade motion-safe:rdx-side-right:animate-slide-right-fade'
          )}
        >
          <Popover.Arrow className='fill-gray-6' />
          <ThemeToggle />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ThemePopover;
