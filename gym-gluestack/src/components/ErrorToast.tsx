import { Toast, ToastDescription, ToastTitle, VStack } from "@gluestack-ui/themed";

type ErrorToastProps = {
    id: string,
    message: string,
    title?: string
}

export function ErrorToast({id,message,title}: ErrorToastProps){

    return (
            <Toast nativeID={id} action="error" variant="solid">
              <VStack w={"$full"}>
                {title && <ToastTitle>{title}</ToastTitle>}
                <ToastDescription>
                  {message}
                </ToastDescription>
              </VStack>
            </Toast>
          )
}