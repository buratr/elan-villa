import moment from 'moment';

export const formatDate = (date: string | undefined): string => {
    return moment(date).format('L');
};

export const calculateNights = (selectedDates: Date[]): number => {
    // Add your logic to calculate the number of nights
    // For example, return the difference in days between the start and end dates
    if (selectedDates && selectedDates.length === 2) {
        const start = selectedDates[0];
        const end = selectedDates[1];
        const timeDifference = end.getTime() - start.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return Math.round(daysDifference);
    }

    return 0;
}