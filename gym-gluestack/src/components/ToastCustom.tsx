import { Toast, ToastDescription, ToastTitle, VStack } from "@gluestack-ui/themed";

type ToastProps = {
    id: string,
    message: string,
    type: "error" | "warning" | "info" | "success",
    title?: string
}

export function ToastCustom({id,message,type,title}: ToastProps){

    return (
      <Toast bg={`$${type}700`} nativeID={id} action={type} variant="solid">
        <VStack w={"$full"}>
          {title && <ToastTitle color="$white">{title}</ToastTitle>}
          <ToastDescription color="$white">
            {message}
          </ToastDescription>
        </VStack>
      </Toast>
    )
}