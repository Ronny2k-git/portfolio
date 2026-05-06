import { ScrollToTop, Stars } from '@/global/components'
import Footer from '@/global/components/Footer'
import NotFound from '@/global/components/NotFound'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import Header from '../global/components/Header'

export const Route = createRootRoute({
  component: () => (
    <main>
      {/* Project Header */}
      <Header />

      {/* Content */}
      <Outlet />

      {/* Component to scroll to the top of the page */}
      <ScrollToTop />

      <Stars />

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
    </main>
  ),
  notFoundComponent: () => <NotFound />,
})
