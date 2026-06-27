import { Dialog as ArkDialog } from "@ark-ui/react/dialog"
import type { ComponentPropsWithRef } from "react"
import { cx } from "styled-system/css"
import { dialog } from "styled-system/recipes"

const styles = dialog()

type RootProps = ComponentPropsWithRef<typeof ArkDialog.Root>
type TriggerProps = ComponentPropsWithRef<typeof ArkDialog.Trigger>
type BackdropProps = ComponentPropsWithRef<typeof ArkDialog.Backdrop>
type PositionerProps = ComponentPropsWithRef<typeof ArkDialog.Positioner>
type ContentProps = ComponentPropsWithRef<typeof ArkDialog.Content>
type TitleProps = ComponentPropsWithRef<typeof ArkDialog.Title>
type DescriptionProps = ComponentPropsWithRef<typeof ArkDialog.Description>
type CloseTriggerProps = ComponentPropsWithRef<typeof ArkDialog.CloseTrigger>

const Root = (props: RootProps) => <ArkDialog.Root {...props} />

const Trigger = ({ className, ...props }: TriggerProps) => (
	<ArkDialog.Trigger className={cx(styles.trigger, className)} {...props} />
)

const Backdrop = ({ className, ...props }: BackdropProps) => (
	<ArkDialog.Backdrop className={cx(styles.backdrop, className)} {...props} />
)

const Positioner = ({ className, ...props }: PositionerProps) => (
	<ArkDialog.Positioner
		className={cx(styles.positioner, className)}
		{...props}
	/>
)

const Content = ({ className, ...props }: ContentProps) => (
	<ArkDialog.Content className={cx(styles.content, className)} {...props} />
)

const Title = ({ className, ...props }: TitleProps) => (
	<ArkDialog.Title className={cx(styles.title, className)} {...props} />
)

const Description = ({ className, ...props }: DescriptionProps) => (
	<ArkDialog.Description
		className={cx(styles.description, className)}
		{...props}
	/>
)

const CloseTrigger = ({ className, ...props }: CloseTriggerProps) => (
	<ArkDialog.CloseTrigger
		className={cx(styles.closeTrigger, className)}
		{...props}
	/>
)

export const Dialog = {
	Root,
	Trigger,
	Backdrop,
	Positioner,
	Content,
	Title,
	Description,
	CloseTrigger,
}
