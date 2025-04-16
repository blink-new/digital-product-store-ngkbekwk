
import { motion } from 'framer-motion';
import { Download, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

// Placeholder for user purchases
const purchases = [
  {
    id: '1',
    productId: '1',
    title: 'UI Component Library',
    purchaseDate: new Date('2023-05-15'),
    price: 49.99,
    downloadUrl: '#',
  },
  {
    id: '2',
    productId: '5',
    title: 'Icon Pack - Essential',
    purchaseDate: new Date('2023-06-22'),
    price: 14.99,
    downloadUrl: '#',
  },
];

export function AccountPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your account and access your purchases
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="space-y-1">
              <h2 className="text-lg font-medium">Account</h2>
              <nav className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start">
                  Profile
                </Button>
                <Button variant="ghost" className="justify-start bg-secondary">
                  Purchases
                </Button>
                <Button variant="ghost" className="justify-start">
                  Settings
                </Button>
              </nav>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="font-medium">Your Purchases</h2>
                
                <Separator className="my-4" />
                
                {purchases.length > 0 ? (
                  <div className="space-y-4">
                    {purchases.map((purchase) => (
                      <motion.div
                        key={purchase.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="rounded-md bg-primary/10 p-2">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{purchase.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Purchased on {purchase.purchaseDate.toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" asChild>
                          <a href={purchase.downloadUrl}>
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't made any purchases yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}