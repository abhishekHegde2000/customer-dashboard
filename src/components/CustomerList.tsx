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
        <div className="flex h-screen overflow-hidden">
            {/* Customer List Panel */}
            <div className="w-1/3 bg-gray-100 border-r border-gray-300 p-4">
                <h2 className="text-xl font-semibold mb-4">Customers</h2>
                <ScrollArea className="h-full overflow-y-auto rounded-md border border-gray-300 bg-white p-2">
                    {customers.map((customer) => (
                        <CustomerCard
                            key={customer.id}
                            customer={customer}
                            isSelected={selectedCustomerId === customer.id}
                            onClick={handleCardClick}
                            className="mb-2 transition-transform transform hover:scale-105 hover:shadow-lg"
                        />
                    ))}
                </ScrollArea>
            </div>

            {/* Customer Detail Panel */}
            <div className="flex-1 p-4 bg-gray-50">
                {selectedCustomerId ? (
                    <CustomerDetail
                        id={selectedCustomerId}
                        customer={customers.find(
                            (customer) => customer.id === selectedCustomerId
                        )}
                        className="transition-opacity duration-300 opacity-100"
                    />
                ) : (
                    <div className="text-center text-gray-600">
                        Select a customer to see details
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerList;
