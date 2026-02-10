import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

import { ScrollToTop } from '@/global/components'
import Footer from '@/global/components/Footer'
import Header from '../global/components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Project Header */}
      <Header />

      {/* Content */}
      <Outlet />

      {/* Component to scroll to the top of the page */}
      <ScrollToTop />

      {/* Project Footer */}
      <Footer />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
