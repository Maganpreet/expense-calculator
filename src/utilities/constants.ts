import { getDaysInMonth } from "./common";

export type ExpenseDetails = {
    expenses: number[],
    category?: string,
} 

export type Calendar = {
    month: number,
    totalDays: number,
    biweekly1?: number,
    biweekly2?: number,
    details: ExpenseDetails
};

export const INITIAL_EXPENSE_OF_YEAR: Calendar[] = [
    {
        month: 0,
        totalDays: getDaysInMonth(2025, 0),
        details: {
            expenses: []
        }
    },
    {
        month: 1,
        totalDays: getDaysInMonth(2025, 1),
        details: {
            expenses: []
        }
    },
    {
        month: 2,
        totalDays: getDaysInMonth(2025, 2),
        details: {
            expenses: []
        }
    },
    {
        month: 3,
        totalDays: getDaysInMonth(2025, 3),
        details: {
            expenses: []
        }
    },{
        month: 4,
        totalDays: getDaysInMonth(2025, 4),
        details: {
            expenses: []
        }
    },{
        month: 5,
        totalDays: getDaysInMonth(2025, 5),
        details: {
            expenses: []
        }
    },{
        month: 6,
        totalDays: getDaysInMonth(2025, 6),
        details: {
            expenses: []
        }
    },{
        month: 7,
        totalDays: getDaysInMonth(2025, 7),
        details: {
            expenses: []
        }
    },{
        month: 8,
        totalDays: getDaysInMonth(2025, 8),
        details: {
            expenses: []
        }
    },{
        month: 9,
        totalDays: getDaysInMonth(2025, 9),
        details: {
            expenses: []
        }
    },{
        month: 10,
        totalDays: getDaysInMonth(2025, 10),
        details: {
            expenses: []
        }
    },{
        month: 11,
        totalDays: getDaysInMonth(2025, 11),
        details: {
            expenses: []
        }
    },{
        month: 12,
        totalDays: getDaysInMonth(2025, 12),
        details: {
            expenses: []
        }
    }
];