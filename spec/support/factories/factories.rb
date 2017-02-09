FactoryGirl.define do
  factory :message do
    sequence(:slack_team_name) { |n| "launch-jupiter-#{n}" }
    sequence(:slack_channel_name) { |n| "general-#{n}" }
    body "Hey all, general announcement and such n such"
  end
end
