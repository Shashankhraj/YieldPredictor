import { PredictionForm } from '@/components/prediction-form'
import { Header } from '@/components/header'

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="pt-24 pb-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Prediction Dashboard</h1>
              <p className="text-lg text-muted-foreground">
                Enter your crop and environmental data to get an AI-powered yield prediction
              </p>
            </div>

            <PredictionForm />
          </div>
        </div>
      </main>
    </>
  )
}
