import PhotoGrid from "./PhotoGrid";
import { Customer } from "@/types/types";

interface CustomerDetailProps {
    id: number;
    className?: string;
    customer?: Customer;
}

const CustomerDetail = ({ id, customer }: CustomerDetailProps) => {
    return (
        <div>
            <div>{id}</div>
            <div>{customer?.description}</div>
            <div>{id}</div>
            <PhotoGrid />
        </div>
    );
};

export default CustomerDetail;
