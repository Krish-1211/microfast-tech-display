import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const ServiceCardSkeleton = () => (
  <Card className="h-full animate-pulse">
    <CardHeader>
      <Skeleton className="h-12 w-12 rounded-lg mb-4" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-2/3" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-10 w-full mt-6" />
    </CardContent>
  </Card>
);

export const HeroSkeleton = () => (
  <div className="relative py-20 lg:py-32 overflow-hidden bg-muted/20 animate-pulse">
    <div className="relative container mx-auto px-4">
      <div className="max-w-3xl space-y-6">
        <Skeleton className="h-16 w-4/5" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-20 w-full" />
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  </div>
);

export const IndustryCardSkeleton = () => (
  <div className="flex items-center space-x-3 p-6 rounded-lg border border-border animate-pulse">
    <Skeleton className="h-6 w-6 rounded-full flex-shrink-0" />
    <Skeleton className="h-5 flex-1" />
    <Skeleton className="h-4 w-4" />
  </div>
);

export const ContactCardSkeleton = () => (
  <Card className="h-full text-center animate-pulse">
    <CardHeader>
      <Skeleton className="h-12 w-12 rounded-lg mx-auto mb-4" />
      <Skeleton className="h-6 w-20 mx-auto" />
    </CardHeader>
    <CardContent className="space-y-2">
      <Skeleton className="h-4 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
      <Skeleton className="h-3 w-4/5 mx-auto mt-3" />
    </CardContent>
  </Card>
);

export const FormSkeleton = () => (
  <Card className="shadow-lg animate-pulse">
    <CardContent className="p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-32 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <Skeleton className="h-12 w-full" />
    </CardContent>
  </Card>
);