import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Customer } from "@/types/types";

interface CustomerCardProps {
    customer: Customer;
    isSelected?: boolean;
    onClick?: (customerId: number) => void;
    className?: string;
}

const CustomerCard = ({
    customer,
    isSelected,
    onClick,
    className,
}: CustomerCardProps) => {
    return (
        <div
            className={`p-4 border rounded-lg shadow-md transition-transform transform ${
                isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white"
            } cursor-pointer hover:scale-105 hover:shadow-lg ${className}`}
            onClick={() => onClick && onClick(customer.id)} // Call the onClick handler
        >
            <Card>
                <CardHeader className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={customer.avatar} />
                        <AvatarFallback>profile image</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg font-semibold text-gray-800">
                            {customer.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                            {customer.description}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="mt-2">
                    <CardDescription className="text-sm text-gray-600">
                        {customer.address}
                    </CardDescription>
                </CardContent>
                <CardFooter className="mt-4">
                    {/* You can add more details or actions here */}
                </CardFooter>
            </Card>
        </div>
    );
};

export default CustomerCard;
