import { renderModules } from '.'
import { v3string, v5string, v7string } from './fixtures'
import {
  FINDER_PATTERN,
  FINDER_PATTERN_OUTER_SIZE,
} from './fixedPatterns/finder'
import { Matrix } from './types'

const throwForPosition = (x: number, y: number) => {
  throw new Error(`Got undefined under (${x},${y})`)
}

const asciiRender = (matrix: Matrix) => {
  const ASCII = new Map<0 | 1 | null, string>([
    [0, ' '],
    [1, '▓'],
    [null, '·'],
  ])

  return (
    '\n' +
    matrix
      .map((row, y) =>
        row
          .map((pixel, x) =>
            pixel === undefined ? throwForPosition(x, y) : ASCII.get(pixel)
          )
          .join(' ')
      )
      .join('\n')
  )
}

describe('renderer > renderModules', () => {
  it('adds top left finder pattern', () => {
    const simpleStringMatrix = renderModules(v3string)
    const finderPatternArea = simpleStringMatrix
      .slice(4, 4 + FINDER_PATTERN_OUTER_SIZE)
      .map(row => row.slice(4, 4 + FINDER_PATTERN_OUTER_SIZE))

    expect(finderPatternArea).toEqual(FINDER_PATTERN)
  })

  it('adds the timing patterns', () => {
    const simpleStringMatrix = renderModules(v3string)
    const column6 = simpleStringMatrix[6 + 4].join('')

    expect(column6).toEqual('0000111111101010101010101011111110000')

    const row6 = simpleStringMatrix.map(column => column[6 + 4]).join('')

    expect(row6).toEqual('0000111111101010101010101011111110000')
  })

  it('renders correct QR code', () => {
    const simpleStringMatrix = renderModules(v5string)
    expect(asciiRender(simpleStringMatrix)).toMatchInlineSnapshot(`
      "
                                                                                               
                                                                                               
                                                                                               
                                                                                               
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓       ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓       ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓           ▓   ▓   ▓             ▓     ▓   ▓ ▓ ▓ ▓ ▓   ▓   ▓           ▓        
              ▓   ▓ ▓ ▓   ▓     ▓   ▓ ▓ ▓     ▓ ▓     ▓     ▓   ▓   ▓     ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓       ▓ ▓ ▓             ▓ ▓     ▓ ▓           ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓         ▓   ▓ ▓               ▓     ▓         ▓   ▓ ▓ ▓   ▓        
              ▓           ▓     ▓ ▓           ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓           ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                                ▓ ▓ ▓ ▓ ▓         ▓   ▓ ▓   ▓   ▓                              
                ▓         ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓ ▓   ▓ ▓ ▓     ▓ ▓ ▓ ▓           ▓ ▓        
              ▓ ▓     ▓         ▓     ▓         ▓ ▓   ▓   ▓   ▓   ▓   ▓   ▓ ▓     ▓ ▓ ▓        
                ▓ ▓ ▓ ▓   ▓   ▓   ▓       ▓ ▓           ▓           ▓ ▓ ▓     ▓       ▓        
              ▓   ▓           ▓   ▓   ▓ ▓   ▓       ▓     ▓   ▓           ▓ ▓ ▓     ▓ ▓        
              ▓       ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓   ▓ ▓     ▓ ▓ ▓   ▓ ▓ ▓        
              ▓ ▓ ▓     ▓   ▓   ▓ ▓     ▓     ▓ ▓ ▓       ▓     ▓ ▓     ▓   ▓ ▓ ▓     ▓        
              ▓ ▓ ▓ ▓ ▓   ▓ ▓     ▓ ▓       ▓       ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓ ▓     ▓   ▓ ▓          
              ▓ ▓     ▓     ▓               ▓ ▓     ▓         ▓ ▓ ▓   ▓     ▓   ▓              
              ▓   ▓     ▓ ▓   ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓   ▓ ▓   ▓     ▓ ▓   ▓   ▓       ▓          
              ▓       ▓ ▓     ▓ ▓ ▓   ▓ ▓ ▓ ▓   ▓ ▓   ▓   ▓   ▓       ▓   ▓           ▓        
              ▓ ▓ ▓ ▓     ▓     ▓   ▓   ▓ ▓       ▓         ▓   ▓ ▓   ▓ ▓ ▓   ▓   ▓   ▓        
              ▓ ▓     ▓     ▓ ▓ ▓ ▓ ▓ ▓       ▓     ▓ ▓       ▓   ▓ ▓ ▓ ▓ ▓                    
              ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓       ▓ ▓ ▓ ▓   ▓           ▓   ▓                    
              ▓       ▓           ▓   ▓ ▓ ▓       ▓       ▓   ▓       ▓ ▓ ▓ ▓ ▓ ▓     ▓        
              ▓       ▓ ▓ ▓ ▓ ▓ ▓ ▓         ▓ ▓ ▓ ▓ ▓ ▓ ▓           ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓          
              ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓   ▓ ▓ ▓     ▓ ▓     ▓ ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓   ▓ ▓            
              ▓ ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓ ▓   ▓   ▓   ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓            
              ▓     ▓         ▓   ▓   ▓ ▓     ▓ ▓   ▓ ▓ ▓ ▓       ▓   ▓ ▓ ▓     ▓ ▓   ▓        
              ▓   ▓ ▓     ▓       ▓ ▓ ▓   ▓ ▓ ▓     ▓ ▓   ▓ ▓ ▓ ▓         ▓ ▓   ▓ ▓ ▓          
              ▓   ▓         ▓ ▓   ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓     ▓ ▓              
              ▓         ▓ ▓ ▓ ▓   ▓       ▓     ▓   ▓ ▓ ▓ ▓ ▓         ▓ ▓ ▓ ▓ ▓ ▓   ▓          
                              ▓   ▓   ▓ ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓       ▓       ▓   ▓   ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓     ▓     ▓ ▓   ▓     ▓     ▓   ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓        
              ▓           ▓           ▓         ▓   ▓   ▓   ▓     ▓ ▓ ▓       ▓ ▓              
              ▓   ▓ ▓ ▓   ▓       ▓ ▓   ▓ ▓     ▓     ▓ ▓ ▓   ▓       ▓ ▓ ▓ ▓ ▓ ▓   ▓          
              ▓   ▓ ▓ ▓   ▓     ▓   ▓ ▓ ▓ ▓       ▓   ▓   ▓     ▓         ▓ ▓ ▓ ▓     ▓        
              ▓   ▓ ▓ ▓   ▓           ▓ ▓ ▓ ▓ ▓ ▓     ▓ ▓   ▓ ▓ ▓ ▓   ▓ ▓       ▓ ▓   ▓        
              ▓           ▓   ▓ ▓   ▓       ▓ ▓ ▓         ▓ ▓   ▓   ▓     ▓ ▓   ▓ ▓            
              ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓ ▓       ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                                                                                               
                                                                                               
                                                                                               
                                                                                               "
    `)
  })

  it('renders v7 matrix', () => {
    expect(asciiRender(renderModules(v7string))).toMatchInlineSnapshot(`
      "
                                                                                                               
                                                                                                               
                                                                                                               
                                                                                                               
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓       ▓ ▓   ▓ ▓   ▓ ▓ ▓     ▓   ▓ ▓               ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓           ▓   ▓ ▓           ▓ ▓ ▓       ▓ ▓         ▓ ▓   ▓ ▓ ▓   ▓ ▓ ▓   ▓           ▓        
              ▓   ▓ ▓ ▓   ▓         ▓         ▓   ▓ ▓ ▓   ▓   ▓           ▓ ▓     ▓ ▓     ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓       ▓   ▓ ▓ ▓   ▓ ▓   ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓     ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓             ▓ ▓ ▓ ▓ ▓ ▓           ▓ ▓   ▓   ▓     ▓   ▓ ▓ ▓   ▓        
              ▓           ▓     ▓   ▓ ▓ ▓ ▓     ▓ ▓   ▓       ▓ ▓       ▓ ▓       ▓       ▓           ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                                ▓ ▓   ▓ ▓ ▓       ▓   ▓       ▓           ▓         ▓                          
                ▓         ▓ ▓ ▓   ▓     ▓   ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓           ▓ ▓        
              ▓   ▓   ▓       ▓ ▓   ▓   ▓     ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓       ▓       ▓   ▓ ▓ ▓ ▓     ▓   ▓        
                  ▓ ▓     ▓   ▓     ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓     ▓ ▓ ▓ ▓ ▓     ▓ ▓         ▓ ▓ ▓ ▓        
                ▓ ▓ ▓ ▓ ▓   ▓   ▓       ▓       ▓ ▓       ▓ ▓ ▓ ▓ ▓     ▓   ▓   ▓ ▓   ▓     ▓     ▓   ▓        
              ▓ ▓         ▓     ▓ ▓   ▓   ▓ ▓ ▓   ▓ ▓ ▓ ▓   ▓   ▓       ▓   ▓ ▓ ▓     ▓   ▓ ▓ ▓   ▓            
              ▓ ▓ ▓ ▓ ▓     ▓     ▓ ▓ ▓ ▓ ▓ ▓       ▓ ▓     ▓   ▓ ▓   ▓ ▓   ▓   ▓ ▓   ▓     ▓   ▓              
                ▓ ▓ ▓ ▓   ▓   ▓             ▓     ▓ ▓   ▓   ▓         ▓   ▓     ▓   ▓ ▓ ▓   ▓       ▓ ▓        
                    ▓   ▓   ▓ ▓ ▓   ▓     ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓     ▓   ▓   ▓   ▓ ▓ ▓   ▓   ▓   ▓ ▓              
                ▓   ▓ ▓ ▓ ▓ ▓     ▓     ▓     ▓         ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓     ▓   ▓     ▓   ▓ ▓ ▓        
                ▓     ▓ ▓   ▓ ▓ ▓ ▓ ▓       ▓ ▓   ▓ ▓         ▓       ▓   ▓   ▓       ▓       ▓   ▓            
              ▓ ▓   ▓   ▓ ▓       ▓           ▓   ▓   ▓           ▓       ▓       ▓       ▓       ▓            
              ▓   ▓ ▓ ▓ ▓   ▓   ▓             ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓     ▓       ▓ ▓   ▓ ▓ ▓ ▓     ▓ ▓ ▓        
              ▓   ▓   ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓          
              ▓     ▓ ▓       ▓     ▓ ▓       ▓       ▓       ▓ ▓       ▓       ▓     ▓       ▓ ▓ ▓   ▓        
                ▓ ▓ ▓ ▓   ▓   ▓         ▓ ▓ ▓ ▓   ▓ ▓ ▓   ▓   ▓       ▓   ▓ ▓ ▓ ▓     ▓   ▓   ▓ ▓   ▓ ▓        
                  ▓ ▓ ▓       ▓ ▓   ▓   ▓         ▓ ▓ ▓       ▓ ▓   ▓   ▓       ▓ ▓   ▓       ▓ ▓     ▓        
              ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓       ▓     ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓ ▓   ▓            
                ▓ ▓ ▓   ▓   ▓ ▓   ▓         ▓ ▓   ▓   ▓   ▓       ▓ ▓   ▓       ▓ ▓   ▓   ▓       ▓ ▓          
              ▓   ▓     ▓ ▓ ▓         ▓ ▓ ▓     ▓     ▓ ▓   ▓   ▓   ▓   ▓ ▓     ▓     ▓ ▓ ▓     ▓ ▓            
              ▓     ▓   ▓       ▓   ▓ ▓   ▓         ▓     ▓ ▓     ▓   ▓ ▓     ▓   ▓       ▓   ▓   ▓ ▓ ▓        
              ▓   ▓   ▓ ▓ ▓ ▓         ▓ ▓ ▓ ▓ ▓ ▓   ▓       ▓   ▓     ▓     ▓ ▓     ▓ ▓     ▓   ▓ ▓            
              ▓   ▓   ▓ ▓   ▓   ▓   ▓     ▓     ▓   ▓     ▓ ▓ ▓       ▓ ▓     ▓     ▓   ▓   ▓ ▓   ▓            
                    ▓     ▓         ▓       ▓     ▓   ▓ ▓ ▓ ▓ ▓   ▓     ▓ ▓       ▓     ▓ ▓ ▓     ▓            
                      ▓     ▓ ▓   ▓ ▓ ▓ ▓       ▓ ▓ ▓ ▓             ▓   ▓   ▓   ▓ ▓   ▓ ▓   ▓ ▓   ▓   ▓        
              ▓ ▓ ▓   ▓ ▓ ▓ ▓     ▓   ▓ ▓       ▓ ▓ ▓ ▓ ▓     ▓     ▓           ▓ ▓     ▓ ▓ ▓   ▓ ▓ ▓ ▓        
                ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓   ▓         ▓ ▓   ▓     ▓ ▓ ▓   ▓ ▓ ▓     ▓     ▓   ▓   ▓ ▓        
                ▓ ▓     ▓ ▓ ▓ ▓                 ▓     ▓ ▓     ▓     ▓     ▓     ▓     ▓ ▓ ▓ ▓ ▓                
                ▓ ▓ ▓ ▓     ▓   ▓ ▓       ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓       ▓     ▓                 ▓ ▓ ▓   ▓          
                ▓         ▓       ▓       ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓   ▓       ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                              ▓ ▓       ▓     ▓ ▓ ▓   ▓       ▓ ▓   ▓     ▓   ▓       ▓       ▓   ▓ ▓          
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓   ▓   ▓ ▓   ▓   ▓ ▓ ▓ ▓     ▓ ▓   ▓   ▓ ▓ ▓            
              ▓           ▓         ▓ ▓   ▓ ▓     ▓   ▓       ▓   ▓   ▓ ▓   ▓ ▓   ▓ ▓ ▓       ▓   ▓ ▓ ▓        
              ▓   ▓ ▓ ▓   ▓       ▓   ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓           ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓            
              ▓   ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓   ▓ ▓   ▓ ▓   ▓   ▓ ▓ ▓   ▓     ▓   ▓     ▓   ▓ ▓ ▓     ▓              
              ▓   ▓ ▓ ▓   ▓       ▓ ▓     ▓ ▓ ▓         ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓       ▓ ▓   ▓ ▓   ▓ ▓        
              ▓           ▓   ▓ ▓           ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓     ▓     ▓ ▓           ▓     ▓ ▓     ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓     ▓       ▓ ▓       ▓ ▓   ▓ ▓   ▓ ▓         ▓   ▓ ▓ ▓ ▓   ▓            
                                                                                                               
                                                                                                               
                                                                                                               
                                                                                                               "
    `)
  })
})
