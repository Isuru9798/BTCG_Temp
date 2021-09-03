export interface User {
    country: string;
    user_status: boolean;
    user_last_name: string;
    user_image: string;
    city: string;
    created_at: string;
    user_reference_id: null;
    user_status_string: string;
    zip_code: string;
    user_first_name: string;
    address_line2: string;
    user_reference: boolean;
    updated_at: string;
    address_line1: string;
    district: string;
    id: string
}

export interface LoginData {
    access_token: string;
    user: User
}