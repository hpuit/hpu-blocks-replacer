import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCorePullquoteBlockVariations() {
    registerBlockVariation('core/pullquote', {
        name: 'hpu-blocks-pullquote',
        title: 'Pullquote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-pullquote',
            align: {
                type: 'string',
                default: 'none',
            },
            verticalAlignment: {
                type: 'string',
                default: 'none',
            },
            contentJustification: {
                type: 'string',
                default: 'left',
            },
            contentWidth: {
                type: 'string',
                default: 'full',
            },
            contentWidthCustom: {
                type: 'number',
                default: 0,
            },
            contentWidthUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}