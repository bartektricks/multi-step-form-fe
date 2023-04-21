import type { ReactElement } from 'react';
import sidebarMobile from '@/assets/bg-sidebar-mobile.svg';
import sidebarDesktop from '@/assets/bg-sidebar-desktop.svg';
import Button from '@/components/Button';

function App(): ReactElement {
  return (
    <div>
      <Button>hello</Button>
      <Button isTransparent>world</Button>
    </div>
  );
}

export default App;
