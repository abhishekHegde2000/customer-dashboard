import { fetchCustomers } from "@/services/CustomerService";
import { Customer } from "@/types/types";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import CustomerCard from "./CustomerCard";
import CustomerDetail from "./CustomerDetail";
import { Separator } from "@/components/ui/separator";

const CustomerList = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
        null
    );

    const handleCardClick = (customerId: number) => {
        setSelectedCustomerId(customerId);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCustomers();
                setCustomers(data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex">
            <div className="flex ">
                <ScrollArea className="pt-3 max-h-screen w-full rounded-md border">
                    {customers.map((customer) => (
                        <CustomerCard
                            key={customer.id}
                            customer={customer}
                            isSelected={selectedCustomerId === customer.id}
                            onClick={handleCardClick}
                        />
                    ))}
                </ScrollArea>
            </div>
            <div className="flex flex-1">
                {selectedCustomerId && (
                    <CustomerDetail
                        id={selectedCustomerId}
                        customer={customers.find(
                            (customer) => customer.id === selectedCustomerId
                        )}
                    /> // Render CustomerDetail when a customer is selected
                )}
            </div>
        </div>
    );
};

export default CustomerList;
