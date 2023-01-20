//intervalo de datas, contando desde o primeiro dia do ano até o dia atual

import dayjs from "dayjs";

export function generateRangeDatesFromYearStart() {
    const startDate = dayjs().startOf('year')
    const endDate = new Date()

    let dateRange = []
    let compareDate = startDate

    while (compareDate.isBefore(endDate)) {
        dateRange.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dateRange
}