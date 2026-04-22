import { defaultProps } from "./defaultProps";

export const schema = {
    title: "Custom Installments",
    description: "Custom Installments component",
    type: "object",
    properties: {
        discount: {
            title: "Percentual de desconto",
            description: "Percentual de desconto para pagamento à vista",
            type: "string",
            default: defaultProps.discount
        },
        installments: {
            title: "Quantidade de parcelas",
            description: "Parcelamento sem juros",
            type: "string",
            default: defaultProps.installments
        }
    }
}