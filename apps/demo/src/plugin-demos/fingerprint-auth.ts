import { Observable, EventData, Page } from '@nativescript/core';
import {} from '@nativescript/fingerprint-auth';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	testIt() {
		// Test something here
	}
}
