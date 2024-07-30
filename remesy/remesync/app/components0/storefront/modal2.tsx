import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export  function Modal2() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Modal</Button>
      </DrawerTrigger>
      <DrawerContent className="fixed inset-0 z-50 flex flex-col">
        <DrawerHeader className="bg-p text-primary-foreground py-4 px-6">
          <DrawerTitle>Modal Title</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                <p>This is the content of the first card.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                <p>This is the content of the second card.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <DrawerFooter className="bg-muted py-4 px-6">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}