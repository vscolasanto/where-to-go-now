import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('sould render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Teste1',
      slug: 'teste1',
      location: {
        latitude: 11,
        longitude: -133
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Teste2',
      slug: 'teste2',
      location: {
        latitude: 21,
        longitude: -77
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/teste1/i)).toBeInTheDocument()
    expect(screen.getByTitle(/teste2/i)).toBeInTheDocument()
  })
})
