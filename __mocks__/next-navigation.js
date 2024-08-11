jest.mock('next/navigation', () => ({
  useRouter: () => ({
    pathname: '/',
    push: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => ({
    get: jest.fn()
  })
}))