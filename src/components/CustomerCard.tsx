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

const CustomerCard = ({ customer, isSelected, onClick }: CustomerCardProps) => {
    return (
        <div
            className={`p-4 border ${
                isSelected ? "border-blue-500" : "border-gray-300"
            } cursor-pointer`}
            onClick={() => onClick && onClick(customer.id)} // Call the onClick handler
        >
            <Card key={customer.id}>
                <CardHeader>
                    <Avatar>
                        <AvatarImage src={customer.avatar} />
                        <AvatarFallback>profile image</AvatarFallback>
                    </Avatar>
                    <CardTitle>{customer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{customer.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <CardDescription>{customer.address}</CardDescription>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CustomerCard;
