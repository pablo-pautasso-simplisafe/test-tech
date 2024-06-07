import React, { useEffect, useState } from 'react';
import { EventListItem } from '../../types/types';
import './AlarmsPage.css';

/**
 * Parses the JSON response as Event List Items.
 *
 * @param json the JSON data to parse as Event List Items
 * @returns an array of Event List Items
 */
const parseEventListItems = (json: any): EventListItem[] => {
	if (typeof json !== 'object') {
		throw new Error('Invalid JSON format!');
	}

	const timelineEvents = json.timeline.map((event: any) => ({
		eventOrigin: 'Alarm',
		event: event,
	}));
	const subscriptionEvents = json.subscriptionEvents.map((event: any) => ({
		eventOrigin: 'Subscription',
		event: event,
	}));

	return [...timelineEvents, ...subscriptionEvents].map(
		(rawEvent): EventListItem => {
			return {
				...rawEvent,
				isTriggeringSignal: rawEvent.event.id === json.timeline[0].id,
				isGoverningSignal:
					rawEvent.event.id === json.governingAlarmSignalEventId,
			};
		},
	);
};

const AlarmsPage: React.FC = () => {
	const [eventListItems, setEventListItems] = useState<EventListItem[]>([]);

	useEffect(() => {
		fetch('/data/alarm-details.json')
			.then((response) => response.json())
			.then((json) => parseEventListItems(json))
			.then((data) => setEventListItems(data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<>
			<h1>Alarms Page</h1>
		</>
	);
};

export { AlarmsPage };
