import { defaultProps } from "./defaultProps";

export const schema = {
    title: "Custom Installments",
    description: "Custom Installments component",
    type: "object",
    properties: {
        discount: {
            title: "Percentual de desconto",
            description: "Percentual de desconto à vista",
            type: "string",
            default: defaultProps.discount
        },
        installments: {
            title: "Quantidade de parcelas sem juros",
            description: "Parcelamento",
            type: "string",
            default: defaultProps.installments,
            widget: {
                "ui:widget": "textarea"
            }
        },
        icon: {
            title: "Icone PIX",
            description: "Icone para pagamento via PIX",
            type: "string",
            default: defaultProps.installments,
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        textColor: {
            title: "Cor do texto",
            description: "Cor do texto",
            type: "string",
            default: defaultProps.installments,
            widget: {
                "ui:widget": "color"
            }
        },
        date: {
            title: "Data de validade da oferta",
            description: "Data de validade da oferta",
            type: "string",
            widget: {
                "ui:widget": "date-time"
            }
        },
        testSelect: {
            title: 'Select',
            type: 'string',
            enum: ['opt1', 'opt2', 'opt3'], // Define os valores
            enumNames: ['Opção 1', 'Opção 2', 'Opção 3'], // Define os textos
        },

        // Checkbox boleano
        testBoolean: {
            title: 'Boolean',
            type: 'boolean',
        },

        // Radio
        testRadio: {
            title: 'Radio',
            type: 'string',
            enum: ['opt1', 'opt2', 'opt3'], // Define os valores
            enumNames: ['Opção 1', 'Opção 2', 'Opção 3'], // Define os textos
            widget: {
              "ui:widget": "radio"
            }
        },

        richtext: {
            title: "Texto do componente",
            description: "Exemplo Rich Text",
            type: "string",
            default: defaultProps.richtext,
            widget: {
                "ui:widget": "textarea"
            }
        }
    }
}