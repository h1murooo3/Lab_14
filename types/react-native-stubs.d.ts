declare module "react" {
  export function useState<T>(
    initial: T | (() => T)
  ): [T, (value: T | ((prev: T) => T)) => void];
  export function useCallback<T extends (...args: any[]) => any>(fn: T, deps: unknown[]): T;
}

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}

declare module "react-native" {
  export const Alert: { alert: (title: string, message?: string) => void };
  export const FlatList: any;
  export const RefreshControl: any;
  export const SafeAreaView: any;
  export const StyleSheet: { create: <T>(styles: T) => T };
  export const Text: any;
  export const TouchableOpacity: any;
  export const TouchableWithoutFeedback: any;
  export const View: any;
  export const Keyboard: { dismiss: () => void };
  export const KeyboardAvoidingView: any;
  export const Platform: { OS: "ios" | "android" | "web" | string };
  export const ScrollView: any;
  export const TextInput: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
