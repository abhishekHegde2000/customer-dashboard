import PhotoGrid from "./PhotoGrid";
import { Customer } from "@/types/types";

interface CustomerDetailProps {
    id: number;
    className?: string;
    customer?: Customer;
}

const CustomerDetail = ({ id, customer, className }: CustomerDetailProps) => {
    return (
        <div
            className={`p-6 bg-white rounded-lg shadow-lg border border-gray-200 ${className}`}
        >
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Customer ID: {id}
                </h2>
                <p className="text-gray-600">{customer?.description}</p>
            </div>
            <div className="border-t border-gray-300 pt-4">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Photos
                </h3>
                <PhotoGrid id={customer?.id} />
            </div>
        </div>
    );
};

export default CustomerDetail;
