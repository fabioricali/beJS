export interface CreditCardsAll {
    creditCard(value: string): boolean;

    amex(value: string): boolean;

    dinersClub(value: string): boolean;

    discover(value: string): boolean;

    mastercard(value: string): boolean;

    visa(value: string): boolean;
}