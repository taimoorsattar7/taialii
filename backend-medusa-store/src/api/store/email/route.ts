import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const sendgridService = req.scope.resolve("sendgridService");
  const sendOptions = {
    templateId: "d-123....",
    from: "taimoor@taimoorsattar.dev",
    to: "customer@mail.com",
    dynamic_template_data: { dynamic: "data" },
  };
  sendgridService.sendEmail(sendOptions);
};
