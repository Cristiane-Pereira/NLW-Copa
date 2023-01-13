import { Fragment } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
("phosphor-react");
import {
  TextInput,
  TextInputRootProps,
} from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <Fragment>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type yuor email address" />
      </Fragment>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
