"use client";

import { useEffect, useState } from "react";

import { useAuth } from "@/lib/hooks/use-auth";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function DashboardPage() {
  const { user, loading, isAuthenticated } = useAuth();
  
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalTransactions: 0,
  });

  useEffect(() => {
    // Mock fetch stats - in real app, replace with actual API call
    const fetchStats = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStats({
        totalUsers: 1243,
        activeUsers: 876,
        totalTransactions: 4329,
      });
    };

    if (isAuthenticated) {
      fetchStats();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>All registered users</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalUsers}</p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
            <CardDescription>Users active in last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.activeUsers}</p>
          </CardContent>
        </Card>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
            <CardDescription>All processed transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalTransactions}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="animate-fade-in animate-delay-300">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Currently authenticated user details</CardDescription>
          </CardHeader>
          <CardContent>
            {user ? (
              <div className="space-y-2">
                <p><span className="font-semibold">User ID:</span> {user.id}</p>
                <p><span className="font-semibold">Created:</span> {new Date(user.created_at).toLocaleDateString()}</p>
                
                {/* Display additional user information if available in your AuthContext */}
                <p className="text-muted-foreground italic">Note: Additional user details like email and address would appear here when available in the database schema.</p>
              </div>
            ) : (
              <p>Not authenticated or user data unavailable</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
