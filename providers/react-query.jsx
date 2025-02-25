'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IReactQueryProvider {
    children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: IReactQueryProvider) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}