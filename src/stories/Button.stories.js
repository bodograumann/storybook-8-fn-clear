import { expect, fn, userEvent, within } from '@storybook/test';
import Button from './Button.vue';

export default {
  component: Button,

  args: {
    onClick: fn(),
  },
};

export const Click = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const NoClick = {
  play: async ({ args }) => {
    expect(args.onClick).not.toHaveBeenCalled();
  },
};
