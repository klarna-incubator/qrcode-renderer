import { Matrix } from './renderer/types'
import { createModuleDefinition } from '.'

const asciiRender = (matrix: Matrix) => {
  const ASCII = new Map<0 | 1 | null, string>([
    [0, ' '],
    [1, '▓'],
    [null, '·'],
  ])

  return (
    '\n' +
    matrix.map(row => row.map(pixel => ASCII.get(pixel)).join(' ')).join('\n')
  )
}

describe('@qrcode-renderer/core', () => {
  it('creates the module definition for an alphanumeric message', () => {
    expect(asciiRender(createModuleDefinition('qrcode-renderer')))
      .toMatchInlineSnapshot(`
      "
                                                               
                                                               
                                                               
                                                               
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓     ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓           ▓       ▓   ▓   ▓           ▓        
              ▓   ▓ ▓ ▓   ▓               ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓       ▓   ▓   ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓     ▓         ▓   ▓ ▓ ▓   ▓        
              ▓           ▓     ▓ ▓   ▓   ▓           ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                              ▓     ▓ ▓                        
              ▓ ▓   ▓ ▓   ▓       ▓ ▓ ▓   ▓           ▓        
              ▓ ▓   ▓ ▓         ▓ ▓       ▓ ▓     ▓ ▓          
              ▓         ▓ ▓   ▓       ▓         ▓   ▓ ▓        
                      ▓ ▓   ▓ ▓ ▓   ▓   ▓   ▓ ▓   ▓ ▓          
              ▓     ▓ ▓ ▓ ▓     ▓   ▓ ▓ ▓       ▓   ▓ ▓        
                              ▓   ▓ ▓     ▓   ▓   ▓            
              ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓   ▓ ▓     ▓ ▓ ▓              
              ▓           ▓         ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓          
              ▓   ▓ ▓ ▓   ▓   ▓ ▓     ▓         ▓   ▓          
              ▓   ▓ ▓ ▓   ▓   ▓ ▓ ▓ ▓   ▓ ▓                    
              ▓   ▓ ▓ ▓   ▓     ▓     ▓ ▓     ▓     ▓ ▓        
              ▓           ▓   ▓       ▓   ▓     ▓ ▓ ▓ ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓   ▓                
                                                               
                                                               
                                                               
                                                               "
    `)
  })

  it('creates the module definition for an uppercased link', () => {
    expect(
      asciiRender(
        createModuleDefinition(
          'https://github.com/klarna-incubator/qrcode-renderer'.toUpperCase()
        )
      )
      // Try reading this one with your cellphone's camera!
      // You might need to take a few steps back though
    ).toMatchInlineSnapshot(`
      "
                                                                               
                                                                               
                                                                               
                                                                               
              ▓ ▓ ▓ ▓ ▓ ▓ ▓         ▓   ▓ ▓   ▓           ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓           ▓         ▓ ▓ ▓ ▓ ▓ ▓     ▓     ▓           ▓        
              ▓   ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓ ▓     ▓ ▓     ▓   ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓     ▓     ▓ ▓ ▓ ▓   ▓     ▓   ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓           ▓ ▓ ▓   ▓ ▓         ▓   ▓ ▓ ▓   ▓        
              ▓           ▓   ▓   ▓ ▓ ▓ ▓ ▓           ▓   ▓           ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                                ▓ ▓ ▓ ▓   ▓       ▓                            
              ▓     ▓   ▓ ▓   ▓ ▓ ▓             ▓   ▓   ▓   ▓                  
                        ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓   ▓     ▓          
                  ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓     ▓         ▓ ▓ ▓   ▓ ▓   ▓          
              ▓ ▓ ▓ ▓ ▓ ▓       ▓ ▓       ▓ ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓ ▓            
                ▓   ▓ ▓ ▓ ▓     ▓   ▓       ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓   ▓ ▓        
              ▓ ▓ ▓ ▓       ▓         ▓     ▓       ▓   ▓ ▓     ▓ ▓ ▓          
              ▓ ▓   ▓ ▓   ▓       ▓         ▓     ▓     ▓ ▓     ▓   ▓ ▓        
              ▓   ▓   ▓       ▓         ▓ ▓     ▓ ▓ ▓   ▓ ▓       ▓ ▓ ▓        
                ▓ ▓   ▓   ▓   ▓     ▓ ▓ ▓ ▓ ▓         ▓ ▓ ▓ ▓     ▓   ▓        
                ▓ ▓ ▓   ▓   ▓ ▓   ▓               ▓     ▓ ▓   ▓ ▓ ▓ ▓ ▓        
              ▓     ▓   ▓ ▓             ▓         ▓     ▓   ▓                  
                  ▓ ▓   ▓   ▓ ▓ ▓ ▓   ▓ ▓   ▓     ▓ ▓   ▓       ▓ ▓   ▓        
              ▓   ▓   ▓ ▓ ▓     ▓   ▓ ▓   ▓       ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓        
                              ▓ ▓   ▓   ▓       ▓   ▓ ▓       ▓ ▓     ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓           ▓ ▓ ▓     ▓ ▓   ▓   ▓   ▓ ▓     ▓        
              ▓           ▓   ▓ ▓   ▓   ▓             ▓       ▓ ▓              
              ▓   ▓ ▓ ▓   ▓               ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓ ▓                
              ▓   ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓       ▓   ▓     ▓        
              ▓   ▓ ▓ ▓   ▓       ▓       ▓   ▓               ▓ ▓     ▓        
              ▓           ▓                       ▓   ▓             ▓ ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓     ▓ ▓   ▓   ▓     ▓ ▓ ▓   ▓            
                                                                               
                                                                               
                                                                               
                                                                               "
    `)
  })

  it('creates the module definition for a lowercased link', () => {
    expect(
      asciiRender(
        createModuleDefinition(
          'https://github.com/klarna-incubator/qrcode-renderer'
        )
      )
    ).toMatchInlineSnapshot(`
      "
                                                                               
                                                                               
                                                                               
                                                                               
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓   ▓ ▓           ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓           ▓   ▓ ▓       ▓ ▓   ▓ ▓ ▓ ▓     ▓           ▓        
              ▓   ▓ ▓ ▓   ▓   ▓ ▓ ▓ ▓ ▓   ▓     ▓         ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓   ▓ ▓ ▓ ▓   ▓ ▓   ▓   ▓       ▓   ▓ ▓ ▓   ▓        
              ▓   ▓ ▓ ▓   ▓     ▓   ▓   ▓   ▓   ▓ ▓       ▓   ▓ ▓ ▓   ▓        
              ▓           ▓   ▓ ▓ ▓   ▓   ▓     ▓   ▓ ▓   ▓           ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓        
                                  ▓           ▓ ▓     ▓                        
              ▓ ▓     ▓ ▓ ▓       ▓           ▓ ▓     ▓     ▓   ▓ ▓ ▓ ▓        
                  ▓   ▓ ▓   ▓ ▓     ▓   ▓ ▓ ▓ ▓   ▓     ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓ ▓     ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓   ▓   ▓     ▓   ▓ ▓         ▓        
                  ▓ ▓           ▓   ▓ ▓   ▓     ▓ ▓ ▓     ▓ ▓ ▓ ▓   ▓ ▓        
                ▓ ▓   ▓   ▓ ▓ ▓       ▓     ▓   ▓ ▓   ▓ ▓           ▓          
              ▓ ▓       ▓   ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓ ▓       ▓ ▓ ▓ ▓ ▓ ▓ ▓        
              ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓   ▓ ▓   ▓        
                      ▓     ▓   ▓   ▓ ▓   ▓ ▓   ▓ ▓ ▓ ▓ ▓           ▓ ▓        
                        ▓ ▓ ▓ ▓   ▓   ▓       ▓ ▓     ▓     ▓       ▓          
              ▓     ▓       ▓       ▓   ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓ ▓ ▓   ▓ ▓        
                    ▓     ▓ ▓       ▓     ▓ ▓   ▓     ▓           ▓   ▓        
                                ▓ ▓   ▓     ▓ ▓ ▓ ▓   ▓ ▓   ▓ ▓     ▓ ▓        
              ▓ ▓       ▓ ▓     ▓ ▓ ▓ ▓         ▓     ▓ ▓ ▓ ▓ ▓ ▓     ▓        
                              ▓     ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓       ▓       ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓     ▓ ▓ ▓ ▓   ▓ ▓ ▓   ▓ ▓ ▓   ▓   ▓ ▓ ▓   ▓        
              ▓           ▓   ▓ ▓ ▓ ▓ ▓   ▓   ▓ ▓   ▓ ▓       ▓                
              ▓   ▓ ▓ ▓   ▓   ▓       ▓   ▓     ▓   ▓ ▓ ▓ ▓ ▓ ▓ ▓              
              ▓   ▓ ▓ ▓   ▓       ▓ ▓     ▓ ▓ ▓   ▓     ▓           ▓ ▓        
              ▓   ▓ ▓ ▓   ▓       ▓ ▓     ▓ ▓       ▓ ▓ ▓       ▓ ▓ ▓ ▓        
              ▓           ▓   ▓   ▓       ▓ ▓   ▓ ▓   ▓ ▓ ▓   ▓ ▓   ▓ ▓        
              ▓ ▓ ▓ ▓ ▓ ▓ ▓   ▓   ▓           ▓ ▓     ▓ ▓ ▓ ▓ ▓ ▓   ▓          
                                                                               
                                                                               
                                                                               
                                                                               "
    `)
  })
})
