import 'styled-components';
import { type Theme } from './utils/theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
