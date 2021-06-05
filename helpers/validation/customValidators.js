export const checkPhoneNumberLength = (number) => {
  const formattedNumber = formatPhoneNumber(number)
  return formattedNumber.length === 11
}

export const formatPhoneNumber = (phone) => {
  const replaceCharacters = ['\\(', '\\)', '-', ' ', '\\+']
  let result = phone

  for (const char of replaceCharacters) {
    const reg = new RegExp(char, 'g')
    result = result.replace(reg, '')
  }
  return result
}

export const areaConditions = (area) => {
  if (area) {
    area = area.replace(',', '.')
    return Number(area) && area < 999 && area > 0
  } else {
    return false
  }
}
