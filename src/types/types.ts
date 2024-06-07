export type EventListItem =
	| {
			eventOrigin: 'Subscription';
			event: SubscriptionEvent;
			isTriggeringSignal: boolean;
			isGoverningSignal: boolean;
	  }
	| {
			eventOrigin: 'Alarm';
			event: AlarmEvent;
			isTriggeringSignal: boolean;
			isGoverningSignal: boolean;
	  };

export interface AlarmEvent {
	id: string;
	type: string;
	locationId?: string;
	timestamp: string;
	alarmId?: string;
	dispatcherId?: string;
	received?: string;
	dispatcherEvent?: any;
	dispatcherEventId?: string;
	dispatcherAlarmId?: string;
	comment?: string;
	specialistId?: string;
	specialistName?: string;
	action?: string;
	signalId?: string;
	signalCode?: SignalCode;
	sensorId?: string;
	accountStatus?: AccountStatus;
	locationIssue?: string;
	displayDelay?: string;
	monitoringServiceProviderEvent?: MonitoringServiceProviderEvent;
}

export interface SignalCode {
	eventContactId?: string;
	zoneId?: string;
}

type AccountStatus = 'Active' | 'InTest' | 'OutOfService';

export interface MonitoringServiceProviderEvent {
	EventOpAct?: string;
	AlarmNumOrTest?: string | null;
}

export interface SubscriptionEvent {
	id: number;
	timestamp: string;
	type?: string;
	contactId: {
		eventCode: number;
		zone: string;
	};
	info?: string;
	sensor?: {
		type?: number;
		serial?: string;
		name?: string;
	};
	message?: {
		subject?: string;
		body?: string;
	};
}
