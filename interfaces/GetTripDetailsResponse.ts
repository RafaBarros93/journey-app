export interface GetTripResponse {
    trip: {
        id: string,
        destination: string,
        starts_at: string,
        ends_at: string,
        is_confirmed: boolean
    }
}