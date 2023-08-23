
// 处理金额小数问题
export const computePrice = (price) => {
    return parseFloat(+price)
}