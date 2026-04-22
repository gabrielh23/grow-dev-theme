import React from 'react'
import { useProduct } from 'vtex.product-context'
import { schema } from './schemas/schema'
import { defaultProps } from './schemas/defaultProps'

type Props = {
  discount: string
  installments: string
}

function CustomInstallments(
  { discount, installments }: Props
) {
  const productContextValue = useProduct();
  const listPrice = productContextValue?.selectedItem?.sellers[0]?.commertialOffer?.ListPrice
  const installmentsValue = listPrice ? listPrice / Number(installments) : null;

  return (
    <div>
      <p>Em até {installments}x de {installmentsValue?.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })} sem juros</p>
      <p>{discount}% de desconto à vista</p>
    </div>
  )
}

CustomInstallments.schema = schema
CustomInstallments.defaultProps = defaultProps

export default CustomInstallments
