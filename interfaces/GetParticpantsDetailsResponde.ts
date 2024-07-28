export interface ParticipantsDetails {
    participants?: [
        {
            id: string;
            name: string;
            email: string;
            is_confirmed: boolean;
            is_owner: boolean;
            trip_id: string;
        }
    ];
}