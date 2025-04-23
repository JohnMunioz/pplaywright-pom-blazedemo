import { BasePage } from "./basePage";
import { bookingLocators } from "./locators/bookings";
import { Page, Locator } from "@playwright/test";

export class BookingsPage extends BasePage {

    private readonly fromPort: Locator;
    private readonly toPort: Locator;
    private readonly submitButton: Locator; 
    private readonly firstFlight: Locator;
    private readonly name: Locator;
    private readonly address: Locator;
    private readonly city: Locator;
    private readonly state: Locator;
    private readonly zipCode: Locator;
    private readonly cardType: Locator;
    private readonly creditCardNumber: Locator;
    private readonly creditCardMonth: Locator;
    private readonly nameOnCard: Locator;
    private readonly purchaseButton: Locator;
    private readonly thankYouMessage: Locator;
    private readonly thankYouText: string;

    constructor(page: Page) {
        super(page);
        this.fromPort = page.locator(bookingLocators.fromPort);
        this.toPort = page.locator(bookingLocators.toPort);
        this.submitButton = page.locator(bookingLocators.submitButton);
        this.firstFlight = page.locator(bookingLocators.firstFlight);
        this.name = page.locator(bookingLocators.name);
        this.address = page.locator(bookingLocators.address);
        this.city = page.locator(bookingLocators.city);
        this.state = page.locator(bookingLocators.state);
        this.zipCode = page.locator(bookingLocators.zipCode);
        this.cardType = page.locator(bookingLocators.cardType);
        this.creditCardNumber = page.locator(bookingLocators.creditCardNumber);
        this.creditCardMonth = page.locator(bookingLocators.creditCardMonth);
        this.nameOnCard = page.locator(bookingLocators.nameOnCard);
        this.purchaseButton = page.locator(bookingLocators.purchaseButton);
        this.thankYouMessage = page.locator(bookingLocators.thankYouMessage);
        this.thankYouText = bookingLocators.thankYouText;
    }

    async selectDestination() {
        await this.selectOption(bookingLocators.fromPort, "Paris");
        await this.selectOption(bookingLocators.toPort, "Buenos Aires");
        await this.clickOn(bookingLocators.submitButton);
        await this.clickOn(bookingLocators.firstFlight);
    }

    async fillPersonalInfo() {
    
        await this.fillField(bookingLocators.name, "Andrew Jones");
        await this.fillField(bookingLocators.address, "123 street");
        await this.fillField(bookingLocators.city, "Any");
        await this.fillField(bookingLocators.state, "State");
        await this.fillField(bookingLocators.zipCode, "1234");
        await this.selectOption(bookingLocators.cardType, "amex");
        await this.fillField(bookingLocators.creditCardNumber, "123456789123");
        await this.fillField(bookingLocators.creditCardMonth, "2017");
        await this.fillField(bookingLocators.nameOnCard, "John Smith");
        await this.clickOn(bookingLocators.submitButton);

    }

    async confirmationBooking() {
        await this.expectVisible(bookingLocators.thankYouMessage);
    }
}