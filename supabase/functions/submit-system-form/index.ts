import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const WEBHOOK_URL = "https://hook.us2.make.com/oyx1vyv32qoxq27847duic4kkesn9dxq";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      // Section 1
      businessType, primaryOffer, avgCustomerValue, salesCycle, salesScope,
      // Section 2
      enquiryChannels, leadVolume, costPerLead,
      // Section 3 - Pipeline
      selectedStages, customStages, stageTrigger, lostLeadAction, speedToLead, multiplePipelines,
      // Section 4
      postEnquiryProcess, currentFollowUp, booksAppointments, appointmentMethod, showRate,
      // Section 5
      currentCRM, otherTools,
      // Section 6
      postSaleProcess, operationNeeds,
      // Section 7
      growthMode, biggestBottleneck, automationPriorities, wantsAI,
      // Section 8
      monthlyRevenue, targetRevenue,
      // Contact
      name, email, phone, website, businessLocation,
      // Meta
      detectedIndustry,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !businessType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, phone, businessType" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const webhookPayload = {
      // Section 1
      business_type: businessType,
      primary_offer: primaryOffer || "",
      avg_customer_value: avgCustomerValue || "",
      sales_cycle: salesCycle || "",
      sales_scope: salesScope || "",
      // Section 2
      enquiry_channels: Array.isArray(enquiryChannels) ? enquiryChannels.join(", ") : "",
      lead_volume: leadVolume || "",
      cost_per_lead: costPerLead || "",
      // Section 3
      pipeline_stages: Array.isArray(selectedStages) ? selectedStages.join(" → ") : "",
      pipeline_stage_count: Array.isArray(selectedStages) ? selectedStages.length : 0,
      custom_stages: Array.isArray(customStages) ? customStages.join(", ") : "",
      stage_trigger: stageTrigger || "",
      lost_lead_action: lostLeadAction || "",
      speed_to_lead: speedToLead || "",
      multiple_pipelines: multiplePipelines || "",
      // Section 4
      post_enquiry_process: postEnquiryProcess || "",
      current_follow_up: Array.isArray(currentFollowUp) ? currentFollowUp.join(", ") : "",
      books_appointments: booksAppointments || "",
      appointment_method: appointmentMethod || "",
      show_rate: showRate || "",
      // Section 5
      current_crm: currentCRM || "",
      other_tools: Array.isArray(otherTools) ? otherTools.join(", ") : "",
      // Section 6
      post_sale_process: postSaleProcess || "",
      operation_needs: Array.isArray(operationNeeds) ? operationNeeds.join(", ") : "",
      // Section 7
      growth_mode: growthMode || "",
      biggest_bottleneck: biggestBottleneck || "",
      automation_priorities: Array.isArray(automationPriorities) ? automationPriorities.join(", ") : "",
      wants_ai: wantsAI || "",
      // Section 8
      monthly_revenue: monthlyRevenue || "",
      target_revenue: targetRevenue || "",
      // Contact
      name,
      email,
      phone,
      website: website || "",
      business_location: businessLocation || "",
      // Meta
      detected_industry: detectedIndustry || "",
      submitted_at: new Date().toISOString(),
    };

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      throw new Error(`Webhook failed [${webhookResponse.status}]: ${errorText}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error submitting form:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
