import React from 'react'
import { useProduct } from 'vtex.product-context'
import { schema } from './schemas/schema'
import { defaultProps } from './schemas/defaultProps'
// import { index as RichText} from 'vtex.rich-text'

type CustomInstallmentsProps = {
  discount: string
  installments: string
  icon: string
  textColor: string
  date: string
  testSelect: string
  testBoolean: boolean
  testRadio: string
  richtext: string
  children?: React.ReactNode
}

const CustomInstallments: StorefrontFunctionComponent<CustomInstallmentsProps> = (
  { discount, installments, icon, textColor, date, testSelect, testBoolean, testRadio, richtext, children }: CustomInstallmentsProps
) => {
  const productContextValue = useProduct();
  const listPrice = productContextValue?.selectedItem?.sellers[0]?.commertialOffer?.ListPrice
  const installmentsValue = listPrice ? listPrice / Number(installments) : null;
  console.log('Brand name: ', discount, installments, icon, textColor, date, testSelect, testBoolean, testRadio, richtext, installmentsValue)

  return (
    <div>
      {/* <p style={{color: textColor}}>Em até {installments}x de {installmentsValue?.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })} sem juros</p>
      <p>{discount}% de desconto à vista</p>
      {icon && <img src={icon} alt="Imagem do produto" />} */}
      {/* <RichText text={richtext} /> */}
      {children}
    </div>
  )
}

CustomInstallments.schema = schema
CustomInstallments.defaultProps = defaultProps

export default CustomInstallments
