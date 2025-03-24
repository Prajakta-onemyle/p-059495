import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardContent: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="default">Create New Campaign</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
            <CardDescription>Your currently running campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">12</p>
            <p className="text-sm text-muted-foreground mt-2">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Sites</CardTitle>
            <CardDescription>Websites using your campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">24</p>
            <p className="text-sm text-muted-foreground mt-2">
              +5 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate</CardTitle>
            <CardDescription>Average across all campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">8.7%</p>
            <p className="text-sm text-muted-foreground mt-2">
              +1.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates from your campaigns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="font-medium">Campaign "Summer Sale" launched</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="font-medium">
                    New site "fashion-store.com" added
                  </p>
                  <p className="text-sm text-muted-foreground">Yesterday</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <p className="font-medium">
                    Campaign "Spring Collection" ended
                  </p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
